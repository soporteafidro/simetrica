import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Logger } from 'aws-amplify';
import { GoogleChartComponent } from 'ng2-google-charts';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AddendumsService } from 'src/app/addendums/addendums.service';
import { CentersService } from 'src/app/centers/centers.service';
import {
  AddendaByStudyQuery,
  EntityState,
  GetStudyWithAllDataQuery,
  ListStudyCentersQuery,
  ListStudyCommitteeIterationsQuery,
} from 'src/app/services/API.service';
import { SisecService } from 'src/app/services/sisec.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { StudiesService } from '../studies.service';
const logger = new Logger('study-times');

@Component({
  selector: 'app-study-times',
  templateUrl: './study-times.component.html',
  styleUrls: ['./study-times.component.scss'],
})
export class StudyTimesComponent implements OnInit, AfterViewInit {
  constructor(
    private studiesService: StudiesService,
    private centersService: CentersService,
    private addendumsService: AddendumsService,
    private sisec: SisecService,
    private config: DynamicDialogConfig,
    private dateIITPipe: DateIITPipe
  ) {}

  @ViewChild('chart', { static: false }) chart: GoogleChartComponent;

  showChart = false;
  study: GetStudyWithAllDataQuery;
  studyId: string = null;
  studyCenters = [];
  studyCommitteeIterations = [];
  addendums = [];
  showErrors = [];

  private tooltipText = `<div class="p-p-3">
                            <b>#Name#</b>
                            <hr>
                            <b>#Role#</b>: #dates#
                            <br>
                            <b>Duración</b>: #duration#
                        </div>`;

  public timelineChartData: any = {
    chartType: 'Timeline',
    dataTable: {
      cols: [
        { id: 'Role', type: 'string' },
        { id: 'Name', type: 'string' },
        { id: 'style', type: 'string', role: 'style' },
        { role: 'tooltip', type: 'string' },
        { id: 'Start', type: 'date' },
        { id: 'End', type: 'date' },
      ],
      rows: [],
    },
    options: {
      width: '100%',
      height: '400',
      tooltip: { isHtml: true },
      avoidOverlappingGridLines: false,
      timeline: { groupByRowLabel: false, showRowLabels: false },
    },
  };

  ngOnInit(): void {
    this.studyId = this.config.data?.studyId;
    this.loadRequiredData();
  }

  ngAfterViewInit(): void {
    this.chart.draw();
  }

  loadRequiredData(): void {
    this.sisec.showSpinner('Consultando datos...');

    // LOAD STUDY
    const promiseLoadStudy = this.studiesService
      .getStudyWithAllData(this.studyId)
      .then((response: GetStudyWithAllDataQuery) => {
        logger.debug('getStudy response', response);
        this.study = response;
      })
      .catch((error) => {
        logger.error('getStudy error', error);
        this.sisec.hideSpinner();
      })
      .finally(() => {
        this.sisec.hideSpinner();
      });

    // LOAD STUDY CENTERS
    const promiseLoadStudyCenters = this.centersService
      .listStudyCentersByStudy(this.studyId)
      .then((response: ListStudyCentersQuery) => {
        logger.debug('listStudyCentersByStudy response', response);
        this.studyCenters = response.items;
      })
      .catch((error) => {
        logger.error('listStudyCentersByStudy error', error);
      })
      .finally(() => this.sisec.hideSpinner());

    // LOAD COMMITTE ITERATIONS LIST
    const promiseLoadCommittees = this.studiesService
      .listStudyCommitteeIterationsByStudy(this.studyId)
      .then((response: ListStudyCommitteeIterationsQuery) => {
        logger.debug('listStudyCommitteeIterationsByStudy response', response);
        this.studyCommitteeIterations = response.items;
      })
      .catch((error) => {
        logger.error('listStudyCommitteeIterationsByStudy error', error);
      });

    // LOAD ADDENDUMS
    const promiseLoadAddendums = this.addendumsService
      .listAddendumsByStudyWithAllData(this.studyId)
      .then((response: AddendaByStudyQuery) => {
        logger.debug('listAddendumsByStudy response', response);
        this.addendums = response.items;
      })
      .catch((error) => {
        logger.error('listAddendumsByStudy error', error);
      });

    Promise.all([
      promiseLoadStudy,
      promiseLoadStudyCenters,
      promiseLoadCommittees,
      promiseLoadAddendums,
    ]).then((e) => {
      this.CalculateTimes();
      if (
        this.timelineChartData.dataTable.rows &&
        this.timelineChartData.dataTable.rows.length > 0
      ) {
        this.showChart = true;
      } else {
        this.showChart = false;
      }
    });
  }

  CalculateTimes(): void {
    this.obtenerTiemposParaInicioEstudioClinico(
      this.timelineChartData.dataTable.rows
    );
    this.obtenerTiemposParaAprobacionINVIMA(
      this.timelineChartData.dataTable.rows
    );
    this.obtenerTiemposParaLicenciaDeImportacionMedicamentos(
      this.timelineChartData.dataTable.rows
    );
    this.obtenerTiemposParaLicenciaDeImportacionKit(
      this.timelineChartData.dataTable.rows
    );
    this.obtenerTiemposParaAprobacionDeCentros(
      this.timelineChartData.dataTable.rows
    );
    this.obtenerTiemposParaImplementarUnaEnmienda(
      this.timelineChartData.dataTable.rows
    );
    this.obtenerTiemposParaAprobacionDeComites(
      this.timelineChartData.dataTable.rows
    );
    this.sisec.hideSpinner();
  }

  getTooltipText(role, name, startDate: Date, endDate: Date): string {
    let texto = this.tooltipText;
    texto = texto.replace('#Role#', role);
    texto = texto.replace('#Name#', name);
    texto = texto.replace('#dates#', this.showDates(startDate, endDate));
    texto = texto.replace(
      '#duration#',
      this.calculateDuration(startDate, endDate)
    );

    return texto;
  }

  // 01 TIEMPO PARA INICIAR ESTUDIO CLÍNICO
  // Fecha 1er paciente reclutado en Colombia - Fecha de factibilidad
  obtenerTiemposParaInicioEstudioClinico(records: any[]): void {
    if (
      this.study.fechaPrimerPacienteReclutadoColombia &&
      this.study.fechaFactibilidadColombia
    ) {
      const inicioEstudioDesde: Date = this.parseDate(
        this.study.fechaFactibilidadColombia
      );
      const inicioEstudioHasta: Date = this.parseDate(
        this.study.fechaPrimerPacienteReclutadoColombia
      );
      if (inicioEstudioDesde <= inicioEstudioHasta) {
        records.push({
          c: [
            { v: 'ESTUDIO' },
            { v: 'INICIO DEL ESTUDIO' },
            { v: '#211c54' },
            {
              v: this.getTooltipText(
                'INICIO DEL ESTUDIO',
                'ESTUDIO',
                inicioEstudioDesde,
                inicioEstudioHasta
              ),
            },
            { v: inicioEstudioDesde },
            { v: inicioEstudioHasta },
          ],
        });
      } else {
        this.showErrors.push(
          'ESTUDIO - INICIO DEL ESTUDIO: La fecha de factibilidad en Colombia' +
            ' (' +
            this.dateIITPipe.transform(inicioEstudioDesde) +
            ') ' +
            'debe de ser menor a la fecha del primer paciente reclutado en Colombia' +
            '(' +
            this.dateIITPipe.transform(inicioEstudioDesde) +
            ').'
        );
      }
    } else {
      this.showErrors.push(
        'ESTUDIO - INICIO DEL ESTUDIO: Por favor verifíque que haya ingresado la fecha de factibilidad en Colombia y la fecha del primer paciente reclutado en Colombia.'
      );
    }
  }

  // 02 TIEMPOS DE APROBACIÓN INVIMA
  // Fecha de aprobación del estudio por el INVIMA - Fecha de sometimiento a INVIMA
  obtenerTiemposParaAprobacionINVIMA(records: any[]): void {
    // me fijo si fue aprobado por invima
    const fechaAprINVIMAAsString = this.study.fechaAprobacionEstudioInvima;
    let fechaAprINVIMA: Date = null;
    if (fechaAprINVIMAAsString) {
      fechaAprINVIMA = this.parseDate(fechaAprINVIMAAsString);
    }
    if (fechaAprINVIMA) {
      // fecha de sometimiento inicial
      const sometimientoInicial = this.study.invimaIterations.items
        .filter((s) => s.estado !== EntityState.DELETED)
        .find((s) => s.tipoIteracion === 'Sometimiento inicial');

      if (sometimientoInicial) {
        // si aun no se sometio, entonces este tiempo no se agrega.

        const fechaSometimientoInicial: Date = this.parseDate(
          sometimientoInicial.fechaDeSometimiento
        );
        records.push({
          c: [
            { v: 'ESTUDIO' },
            { v: 'APROBACIÓN INVIMA' },
            { v: '#211c54' },
            {
              v: this.getTooltipText(
                'APROBACIÓN INVIMA',
                'ESTUDIO',
                fechaSometimientoInicial,
                fechaAprINVIMA
              ),
            },
            { v: fechaSometimientoInicial },
            { v: fechaAprINVIMA },
          ],
        });
      } else {
        this.showErrors.push(
          'ESTUDIO - APROBACIÓN INVIMA: Por favor verifíque que haya ingresado la fecha de sometimiento a INVIMA.'
        );
      }
    } else {
      this.showErrors.push(
        'ESTUDIO - APROBACIÓN INVIMA: Por favor verifíque que haya una fecha de aprobación INVIMA.'
      );
    }
  }

  // 03 TIEMPOS PARA LICENCIA DE IMPORTANCIÓN DE MEDICAMENTOS
  // Fecha de primera importación en bodega - Fecha aprobación de Invima (Resolución)
  obtenerTiemposParaLicenciaDeImportacionMedicamentos(records: any[]): void {
    // me fijo si fue aprobado por invima
    const fechaAprINVIMAAsString = this.study.fechaAprobacionEstudioInvima;
    let fechaAprINVIMA: Date = null;
    if (fechaAprINVIMAAsString) {
      fechaAprINVIMA = this.parseDate(fechaAprINVIMAAsString);
    }
    if (fechaAprINVIMA) {
      // si no tiene esta fecha, no agrego el tiempo
      if (this.study.fechaDeImportacionEnBodegaMedicamentos) {
        const fechaImportacionEnBodega: Date = this.parseDate(
          this.study.fechaDeImportacionEnBodegaMedicamentos
        );
        if (fechaImportacionEnBodega < fechaAprINVIMA) {
          this.showErrors.push(
            'ESTUDIO - LICENCIA DE IMPORTACIÓN DE LOS MEDICAMENTOS: La fecha de aprobación INVIMA' +
              ' (' +
              this.dateIITPipe.transform(fechaAprINVIMA) +
              ') ' +
              'debe ser menor a la fecha de importación en bodega de los medicamentos' +
              ' (' +
              this.dateIITPipe.transform(fechaImportacionEnBodega) +
              ').'
          );
        } else {
          records.push({
            c: [
              { v: 'ESTUDIO' },
              { v: 'LICENCIA DE IMPORTACIÓN DE LOS MEDICAMENTOS' },
              { v: '#211c54' },
              {
                v: this.getTooltipText(
                  'LICENCIA DE IMPORTACIÓN DE LOS MEDICAMENTOS',
                  'ESTUDIO',
                  fechaAprINVIMA,
                  fechaImportacionEnBodega
                ),
              },
              { v: fechaAprINVIMA },
              { v: fechaImportacionEnBodega },
            ],
          });
        }
      } else {
        this.showErrors.push(
          'ESTUDIO - LICENCIA DE IMPORTACIÓN DE LOS MEDICAMENTOS: Por favor verifíque que haya ingresado la fecha de importación en bodega de los medicamentos.'
        );
      }
    } else {
      this.showErrors.push(
        'ESTUDIO - LICENCIA DE IMPORTACIÓN DE LOS MEDICAMENTOS: Por favor verifíque que haya una fecha de aprobación INVIMA.'
      );
    }
  }

  // 03 TIEMPOS PARA LICENCIA DE IMPORTANCIÓN DE LOS KITS / INSUMOS
  // Fecha de primera importación en bodega - Fecha aprobación de Invima (Resolución)
  obtenerTiemposParaLicenciaDeImportacionKit(records: any[]): void {
    // me fijo si fue aprobado por invima
    const fechaAprINVIMAAsString = this.study.fechaAprobacionEstudioInvima;
    let fechaAprINVIMA: Date = null;
    if (fechaAprINVIMAAsString) {
      fechaAprINVIMA = this.parseDate(fechaAprINVIMAAsString);
    }
    if (fechaAprINVIMA) {
      // si no tiene esta fecha, no agrego el tiempo
      if (this.study.fechaDeImportacionEnBodegaKit) {
        const fechaImportacionEnBodega: Date = this.parseDate(
          this.study.fechaDeImportacionEnBodegaKit
        );
        if (fechaImportacionEnBodega < fechaAprINVIMA) {
          this.showErrors.push(
            'ESTUDIO - LICENCIA DE IMPORTACIÓN DE LOS KITS / INSUMOS: La fecha de aprobación INVIMA' +
              ' (' +
              this.dateIITPipe.transform(fechaAprINVIMA) +
              ') ' +
              'debe ser menor a la fecha de importación en bodega de los kits / insumos' +
              ' (' +
              this.dateIITPipe.transform(fechaImportacionEnBodega) +
              ').'
          );
        } else {
          records.push({
            c: [
              { v: 'ESTUDIO' },
              { v: 'LICENCIA DE IMPORTACIÓN DE LOS KITS / INSUMOS' },
              { v: '#211c54' },
              {
                v: this.getTooltipText(
                  'LICENCIA DE IMPORTACIÓN DE LOS KITS / INSUMOS',
                  'ESTUDIO',
                  fechaAprINVIMA,
                  fechaImportacionEnBodega
                ),
              },
              { v: fechaAprINVIMA },
              { v: fechaImportacionEnBodega },
            ],
          });
        }
      } else {
        this.showErrors.push(
          'ESTUDIO - LICENCIA DE IMPORTACIÓN DE LOS KITS / INSUMOS: Por favor verifíque que haya ingresado la fecha de importación en bodega de los kits/ insumos.'
        );
      }
    } else {
      this.showErrors.push(
        'ESTUDIO - LICENCIA DE IMPORTACIÓN DE LOS KITS / INSUMOS: Por favor verifíque que haya una fecha de aprobación INVIMA.'
      );
    }
  }

  // 03 TIEMPOS DE APROBACIÓN DEL CENTRO (POR CENTRO)
  // Fecha inclusión 1er paciente por centro específico - Fecha recibo del paquete completo

  // 04 TIEMPOS GENERACIÓN Y APROBACIÓN CONTRATOS
  // Fecha de firma del contrato x patrocinador - Fecha selección de Colombia

  obtenerTiemposParaAprobacionDeCentros(records: any[]): void {
    this.studyCenters.forEach((studyCenter) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      // 03 TIEMPOS DE APROBACIÓN DEL CENTRO (POR CENTRO)
      if (
        studyCenter.fechaPrimerPacienteSeleccionado &&
        studyCenter.fechaRecepcionPaquete
      ) {
        const fechaPrimerPaciente: Date = this.parseDate(
          studyCenter.fechaPrimerPacienteSeleccionado
        );
        const fechaPaquete: Date = this.parseDate(
          studyCenter.fechaRecepcionPaquete
        );

        if (fechaPaquete <= fechaPrimerPaciente) {
          records.push({
            c: [
              { v: 'CENTROS' },
              { v: 'APROBACIÓN - ' + studyCenter.center.nombre.toUpperCase() },
              { v: randomColor },
              {
                v: this.getTooltipText(
                  'APROBACIÓN - ' + studyCenter.center.nombre.toUpperCase(),
                  'CENTROS',
                  fechaPaquete,
                  fechaPrimerPaciente
                ),
              },
              { v: fechaPaquete },
              { v: fechaPrimerPaciente },
            ],
          });
        } else {
          this.showErrors.push(
            'CENTROS - APROBACIÓN - ' +
              studyCenter.center.nombre.toUpperCase() +
              ': ' +
              'La fecha de recepción del paquete' +
              ' (' +
              this.dateIITPipe.transform(fechaPaquete) +
              ') ' +
              'debe ser menor a la fecha del primer paciente seleccionado' +
              ' (' +
              this.dateIITPipe.transform(fechaPrimerPaciente) +
              ').'
          );
        }
      } else {
        this.showErrors.push(
          'CENTROS - APROBACIÓN - ' +
            studyCenter.center.nombre.toUpperCase() +
            ': ' +
            'Por favor verifíque que haya ingresado la fecha de recepción del paquete y la fecha del primer paciente seleccionado.'
        );
      }

      // 04 TIEMPOS GENERACIÓN Y APROBACIÓN CONTRATOS
      if (
        studyCenter.fechaFirmaContratoPatrocinador &&
        this.study.fechaSeleccionColombia
      ) {
        const fechaFirmaContratoPatrocinador: Date = this.parseDate(
          studyCenter.fechaFirmaContratoPatrocinador
        );
        const fechaSeleccionColombia: Date = this.parseDate(
          this.study.fechaSeleccionColombia
        );
        if (fechaSeleccionColombia <= fechaFirmaContratoPatrocinador) {
          records.push({
            c: [
              { v: 'CENTROS' },
              {
                v:
                  'GENERACIÓN Y APROBACIÓN CONTRATOS - ' +
                  studyCenter.center.nombre.toUpperCase(),
              },
              { v: randomColor },
              {
                v: this.getTooltipText(
                  'GENERACIÓN Y APROBACIÓN CONTRATOS - ' +
                    studyCenter.center.nombre.toUpperCase(),
                  'CENTROS',
                  fechaSeleccionColombia,
                  fechaFirmaContratoPatrocinador
                ),
              },
              { v: fechaSeleccionColombia },
              { v: fechaFirmaContratoPatrocinador },
            ],
          });
        } else {
          this.showErrors.push(
            'CENTROS - GENERACIÓN Y APROBACIÓN CONTRATOS - ' +
              studyCenter.center.nombre.toUpperCase() +
              ': ' +
              'La fecha de selección en Colombia' +
              ' (' +
              this.dateIITPipe.transform(fechaSeleccionColombia) +
              ') ' +
              ' (formulario del datos de indentificación del Estudio) debe ser menor a la fecha de la firma del contrato del patrocinador' +
              ' (' +
              this.dateIITPipe.transform(fechaFirmaContratoPatrocinador) +
              ').'
          );
        }
      } else {
        this.showErrors.push(
          'CENTROS - GENERACIÓN Y APROBACIÓN CONTRATOS - ' +
            studyCenter.center.nombre.toUpperCase() +
            ': ' +
            'Por favor verifíque que haya ingresado la fecha de selección en Colombia (formulario del datos de indentificación del Estudio) y la fecha de la firma del contrato del patrocinador.'
        );
      }
    });
  }

  // 05 TIEMPO PARA IMPLEMENTAR UNA ENMIENDA
  // Trabajo por cada enmienda en el estudio
  obtenerTiemposParaImplementarUnaEnmienda(records: any[]): void {
    this.addendums.forEach((addendum) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      if (
        addendum.tiemposInvima &&
        addendum.tiemposInvima.fechaInicial &&
        addendum.tiemposInvima.fechaFinal
      ) {
        const fechaInicial: Date = this.parseDate(
          addendum.tiemposInvima.fechaInicial
        );
        const fechaFinal: Date = this.parseDate(
          addendum.tiemposInvima.fechaFinal
        );
        records.push({
          c: [
            { v: 'ENMIENDAS' },
            {
              v:
                'IMPLEMENTACIÓN ENMIENDA - ' +
                addendum.descripcion.toUpperCase(),
            },
            { v: randomColor },
            {
              v: this.getTooltipText(
                'IMPLEMENTACIÓN ENMIENDA - ' +
                  addendum.descripcion.toUpperCase(),
                'ENMIENDAS',
                fechaInicial,
                fechaFinal
              ),
            },
            { v: fechaInicial },
            { v: fechaFinal },
          ],
        });
      } else {
        if (addendum) {
          this.showErrors.push(
            'ENMIENDAS - IMPLEMENTACIÓN ENMIENDA - ' +
              addendum.descripcion.toUpperCase() +
              ': ' +
              'Por favor, verifíque que se haya ingresado la fecha de recepción del paquete y la fecha de implementación de la enmienda en ese país.'
          );
        } else {
          this.showErrors.push(
            'ENMIENDAS - IMPLEMENTACIÓN ENMIENDA -  No se encuentra registrada ninguna enmienda para calcular los tiempos asociados a la misma.'
          );
        }
      }

      // 06 TIEMPO DE APROBACIÓN INVIMA POR ENMIENDA
      if (
        addendum.invimaIterations.items &&
        addendum.invimaIterations.items.length !== 0
      ) {
        let iteracionAprobada: any;
        const iteracionSometimientoInicial =
          addendum.invimaIterations.items[
            addendum.invimaIterations.items.length - 1
          ];
        const iteracionesAprobadas = addendum.invimaIterations.items.filter(
          (i) => i.estadoIteracion === 'Aprobado'
        );

        if (iteracionesAprobadas && iteracionesAprobadas.lenght > 0) {
          iteracionAprobada =
            iteracionesAprobadas[iteracionesAprobadas.length - 1];
          let fechaSometimientoInvima: Date;
          let fechaAprobacionInvima: Date;
          if (iteracionSometimientoInicial.fechaDeSometimiento) {
            fechaSometimientoInvima = this.parseDate(
              iteracionSometimientoInicial.fechaDeSometimiento
            );
          }
          if (iteracionAprobada.fechaRespuestaInvima) {
            fechaAprobacionInvima = this.parseDate(
              iteracionAprobada.fechaRespuestaInvima
            );
          }

          if (fechaSometimientoInvima <= fechaAprobacionInvima) {
            records.push({
              c: [
                { v: 'ENMIENDAS' },
                {
                  v:
                    'APROBACIÓN INVIMA - ' + addendum.descripcion.toUpperCase(),
                },
                { v: randomColor },
                {
                  v: this.getTooltipText(
                    'APROBACIÓN INVIMA - ' + addendum.descripcion.toUpperCase(),
                    'ENMIENDAS',
                    fechaSometimientoInvima,
                    fechaAprobacionInvima
                  ),
                },
                { v: fechaSometimientoInvima },
                { v: fechaAprobacionInvima },
              ],
            });
          } else {
            this.showErrors.push(
              'ENMIENDAS - APROBACIÓN INVIMA - ' +
                addendum.descripcion.toUpperCase() +
                ': ' +
                'La fecha de sometimiento INVIMA' +
                ' (' +
                this.dateIITPipe.transform(fechaSometimientoInvima) +
                ') ' +
                'debe ser menor a la fecha de aprobación INVIMA' +
                ' (' +
                this.dateIITPipe.transform(fechaAprobacionInvima) +
                ').'
            );
          }
        } else {
          this.showErrors.push(
            'ENMIENDAS - APROBACIÓN INVIMA - ' +
              addendum.descripcion.toUpperCase() +
              ': ' +
              'Por el momento, no se encuentra creada ninguna interacción aprobada en la enmienda. Debe registrar una para ver los tiempos asociados.'
          );
        }
      } else {
        this.showErrors.push(
          'ENMIENDAS - APROBACIÓN INVIMA - ' +
            addendum.descripcion.toUpperCase() +
            ': ' +
            'Por el momento, no se encuentra creada ninguna interacción en la enmienda. Debe registrar interacciones y una debe tener un estado aprobado para posteriormente ver los tiempos asociados.'
        );
      }
    });
  }

  obtenerTiemposParaAprobacionDeComites(records: any[]): void {
    // ahora por cada relacion centro-comite en este estudio, trabajo sobre sus iteraciones
    this.study.studyCenterCommittees.items.forEach((scc) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const thisCenterCommitteeIterations =
        this.studyCommitteeIterations.filter(
          (s) => s.studyCenterCommitteeID === scc.id
        );

      // encuentro las iteraciones de sometimiento inicial y aprobacion (si es que las hay)
      const sometimientoInicial = thisCenterCommitteeIterations.find(
        (s) => s.tipoIteracion === 'Sometimiento inicial'
      );
      const iteracionesAprobadas = thisCenterCommitteeIterations.filter(
        (s) => s.estadoIteracion === 'Aprobado'
      );
      // si hay una iteracion de sometimiento inicial ya me es suficiente para mostrar este tiempo
      // ya que si aun no fue aprobado, mostrare el tiempo hasta el dia de hoy
      if (sometimientoInicial) {
        const fechaSometimientoInicial: Date = this.parseDate(
          sometimientoInicial.fechaDeSometimientoCE
        );
        let fechaAprobacion: Date = this.getToday();
        if (iteracionesAprobadas && iteracionesAprobadas.length !== 0) {
          fechaAprobacion = this.parseDate(
            iteracionesAprobadas[iteracionesAprobadas.length - 1]
              .fechaRespuestaCE
          );
        }

        if (fechaSometimientoInicial > fechaAprobacion) {
          logger.error(
            'la fecha de sometimiento inicial, es mayor a la de aprobación'
          );
          this.showErrors.push(
            'COMITÉS - APROBACIÓN COMITÉ - ' +
              scc.committee.nombre.toUpperCase() +
              ': ' +
              'La fecha de sometimiento inicial' +
              ' (' +
              this.dateIITPipe.transform(sometimientoInicial) +
              ') ' +
              'debe ser menor a la fecha de aprobación' +
              ' (' +
              this.dateIITPipe.transform(fechaAprobacion) +
              ').'
          );
        } else {
          records.push({
            c: [
              { v: 'COMITÉS' },
              {
                v: 'APROBACIÓN COMITÉ - ' + scc.committee.nombre.toUpperCase(),
              },
              { v: randomColor },
              {
                v: this.getTooltipText(
                  'APROBACIÓN COMITÉ - ' + scc.committee.nombre.toUpperCase(),
                  'COMITÉS',
                  fechaSometimientoInicial,
                  fechaAprobacion
                ),
              },
              { v: fechaSometimientoInicial },
              { v: fechaAprobacion },
            ],
          });
        }
      } else {
        this.showErrors.push(
          'COMITÉS - APROBACIÓN COMITÉ - ' +
            scc.committee.nombre.toUpperCase() +
            ': ' +
            'Por el momento, no se encuentra creada ninguna interacción. Debe registrar interacciones y una debe tener un estado aprobado para posteriormente ver los tiempos asociados.'
        );
      }
    });
  }

  private parseDate(dateStr: string): Date {
    try {
      const fecha = new Date(dateStr);
      return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    } catch (err: any) {
      logger.error('No se pudo convertir la fecha: ' + dateStr);
    }
  }

  private getToday(): Date {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  private getNextMonth(): Date {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
  }

  private showDates(startDate: Date, endDate: Date): string {
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const stringStartDate =
      startDate.getDate() +
      ' ' +
      months[startDate.getMonth()] +
      ' ' +
      startDate.getFullYear();
    const stringEndDate =
      endDate.getDate() +
      ' ' +
      months[endDate.getMonth()] +
      ' ' +
      endDate.getFullYear();

    return stringStartDate + ' - ' + stringEndDate;
  }

  private calculateDuration(startDate, endDate): string {
    let totalDays = startDate - endDate;
    totalDays /= 3600000;
    totalDays /= 24;
    totalDays = Math.floor(totalDays);
    totalDays = Math.abs(totalDays);

    let years, months, days, m2, m1, d3, d2, d1;

    const f2 = new Date(Math.max(startDate, endDate));
    const f1 = new Date(Math.min(startDate, endDate));

    years = f2.getFullYear() - f1.getFullYear();
    m2 = f2.getMonth();
    m1 = f1.getMonth();
    months = m2 - m1;
    if (months < 0) {
      months += 12;
      --years;
    }

    d2 = f2.getDate();
    d1 = f1.getDate();
    days = d2 - d1;

    let f3 = new Date(f2.getFullYear(), m2, 1);
    f3.setDate(f3.getDate() - 1);
    d3 = f3.getDate();

    if (d1 > d2) {
      days += d3;
      --months;
      if (months < 0) {
        months += 12;
        --years;
      }
      if (startDate > endDate) {
        // corrección por febrero y meses de 30 días
        f3 = new Date(f1.getFullYear(), m1 + 1, 1);
        f3.setDate(f3.getDate() - 1);
        d3 = f3.getDate();
        if (d3 === 30) {
          days -= 1;
        }
        if (d3 === 29) {
          days -= 2;
        }
        if (d3 === 28) {
          days -= 3;
        }
      }
    }

    let duration = '';
    if (years !== 0) {
      duration = years + (years === 1 ? ' año' : ' años');
      duration += days !== 0 || months !== 0 ? ', ' : '';
    }
    if (months !== 0) {
      duration += months + (months === 1 ? ' mes' : ' meses');
      duration += days !== 0 ? ', ' : '';
    }
    if (days !== 0) {
      duration += days + (days === 1 ? ' día' : ' días');
    }

    return duration;
  }
}
