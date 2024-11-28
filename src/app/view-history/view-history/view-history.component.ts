import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ViewHistoryService } from '../view-history.service';
import { Logger } from 'aws-amplify';
import { SisecService } from 'src/app/services/sisec.service';
import { DateIITPipe } from 'src/app/utils/pipes/date-iit.pipe';
import { VariableTranslatePipe } from '../variable-translate.pipe';
import { SponsorsService } from 'src/app/sponsors/sponsors.service';
import { AtributosTranslatePipe } from '../atributos-translate.pipe';
const logger = new Logger('study-committees-list');

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {

  constructor(
    public config: DynamicDialogConfig,
    public viewHistoryService: ViewHistoryService,
    private sisec: SisecService,
    private dateIITPipe: DateIITPipe,
    private variableTranslatePipe: VariableTranslatePipe,
    private atributosTranslatePipe: AtributosTranslatePipe,
    private sponsorsService: SponsorsService,
  ) { }

  data = [];
  originalData = [];
  columns = [];
  atributos = null;
  msgs = [{ severity: 'warn', summary: '', detail: 'No se han realizado cambios.' }];
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.sisec.showSpinner('Cargando historial de cambios...');
    const idRegistro = this.config.data.idRegistro;
    const entidad = this.config.data.entidad;
    this.atributos = this.config.data.atributos;

    this.viewHistoryService.getAuditInfo(entidad, idRegistro).then(response => {
      logger.debug('getAuditInfo response', response);
      for (const i of response.items) {
        i.data = JSON.parse(i.data);
        this.originalData.push(i);
      }
      this.buildCHistoryList(this.originalData);
      this.isLoading = false;
    })
      .catch(error => logger.error('getAuditInfo error', error))
      .finally(() => this.sisec.hideSpinner());

    // GENERA COLUMMNAS DE LA LISTA
    this.columns = [
      { value: 'Fecha', key: 'fecha', type: 'text' },
      { value: 'Usuario', key: 'usuario', type: 'text' },
      { value: 'Variable', key: 'variable', type: 'text' },
      { value: 'Valor anterior', key: 'valorAnterior', type: 'text' },
      { value: 'Valor nuevo', key: 'valorNuevo', type: 'text' }
    ];
  }

  buildCHistoryList(items: any[]): void {
    this.data = [];
    for (const registro of items) {
      for (const atr in registro.data) {
        if (registro.data.hasOwnProperty(atr)) {
          let variable = '';
          let valorAnterior = '';
          let valorNuevo = '';
          if (atr !== 'version' && atr !== '__typename' && atr !== 'updatedAt' && atr !== 'estado' && atr !== 'user') {

            if (registro.data[atr]?.S) {
              variable = atr;
              valorNuevo = registro.data[atr].S.data?.newData;
              valorAnterior = registro.data[atr].S.data?.oldData;
              // Tipo de valores nuevos
            } else if (registro.data[atr].data?.newData && registro.data[atr].data.newData.S) {
              variable = atr;
              valorNuevo = registro.data[atr].data.newData.S;
              valorAnterior = '---';
            } else if (registro.data[atr].N) {
              variable = atr;
              valorNuevo = registro.data[atr].N.data?.newData;
              valorAnterior = registro.data[atr].N.data?.oldData;
            } else if (registro.data[atr].data?.newData && registro.data[atr].data.newData.N) {
              variable = atr;
              valorNuevo = registro.data[atr].data.newData.N;
              valorAnterior = '---';
            } else if (registro.data[atr].L) {
              variable = atr;
              for (let i = 0; i < registro.data[atr].L.length; i++) {
                if (registro.data[atr].L[i].S) {
                  const element = registro.data[atr].L[i];
                  valorAnterior += element.S.data?.oldData;
                  valorNuevo += element.S.data?.newData;
                  if (i < registro.data[atr].L.length - 1) {
                    valorAnterior += ","
                    valorNuevo += ","
                  }
                } else if (registro.data[atr].L[i].data && registro.data[atr].L[i].data.newData.S) {
                  valorAnterior = '---';
                  valorNuevo += registro.data[atr].L[i].data.newData.S;
                  if (i < registro.data[atr].L.length - 1) {
                    valorNuevo += ","
                  }
                }
              }
            }

            if (variable) {
              this.data.push({
                fecha: this.dateIITPipe.transformWithTime(registro.eventDateTime),
                usuario: registro.author,
                variable: this.variableTranslatePipe.transform(variable),
                valorAnterior: this.atributosTranslatePipe.transform(valorAnterior, atr),
                valorNuevo: this.atributosTranslatePipe.transform(valorNuevo, atr),
                time: new Date(registro.eventDateTime).getTime()
              });
            }
          }
        }
      }
    }
    this.data.sort((a, b) => {
      return b.time - a.time;
    });
  }

  async obtenerLogo(url): Promise<any> {
    await this.sponsorsService.getImage(url)
      .then(rimage => {
        logger.debug('getImage response:', rimage);
        return rimage;
      })
      .catch(error => logger.error('getImage error:', error));
  }

}
