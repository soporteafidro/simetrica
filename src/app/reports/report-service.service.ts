import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import {
  APIService,
  ListCentersQuery,
  ModelCenterFilterInput,
  ModelStudyCenterCommitteeFilterInput,
  ModelStudyFilterInput,
} from '../services/API.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReportServiceService {
  constructor(private auth: AuthService, private api: APIService) {}

  async getInvimaTimeAll(year): Promise<any> {
    const dataMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dataMesInvima = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cuentaPorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesInvima = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const filterYear: ModelStudyFilterInput = {
      anhoAprobacionInvima: {
        eq: year,
      },
    };
    return await this.api.ListStudys(filterYear, 10000).then((response) => {
      for (const study of response.items) {
        if (study.mesAprobacionInvima !== null) {
          cuentaPorMes[study.mesAprobacionInvima]++;

          sumaPorMesInvima[study.mesAprobacionInvima] +=
            study.diasAprobacionInvimaInvima;

          sumaPorMesPatrocinador[study.mesAprobacionInvima] +=
            study.diasAprobacionInvimaPatrocinador;
        }
      }

      for (let i = 0; i < 12; i++) {
        if (
            cuentaPorMes[i] !== 0 &&
            sumaPorMesInvima[i] !== 0
          ) {
            dataMesInvima[i] = sumaPorMesInvima[i] / cuentaPorMes[i];
        }
        if (
          sumaPorMesPatrocinador[i] !== 0 &&
          sumaPorMesInvima[i] !== 0
          ) {
          dataMesPatrocinador[i] = sumaPorMesPatrocinador[i] / cuentaPorMes[i];
        }
      }
      return {
        dataInvima: dataMesInvima,
        dataPatrocinador: dataMesPatrocinador,
      };
    });
  }

  async getInvimaTimeSponsor(year, idSponsor): Promise<any> {
    const dataMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dataMesInvima = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cuentaPorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesInvima = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const filterYear: ModelStudyFilterInput = {
      anhoAprobacionInvima: {
        eq: year,
      },
      sponsorID: {
        eq: idSponsor,
      },
    };
    return await this.api.ListStudys(filterYear, 10000).then((response) => {
      for (const study of response.items) {
        if (study.mesAprobacionInvima !== null) {
          cuentaPorMes[study.mesAprobacionInvima]++;

          sumaPorMesInvima[study.mesAprobacionInvima] +=
            study.diasAprobacionInvimaInvima;

          sumaPorMesPatrocinador[study.mesAprobacionInvima] +=
            study.diasAprobacionInvimaPatrocinador;
        }
      }

      for (let i = 0; i < 12; i++) {
        if (
            cuentaPorMes[i] !== 0 &&
            sumaPorMesInvima[i] !== 0
          ) {
            dataMesInvima[i] = sumaPorMesInvima[i] / cuentaPorMes[i];
        }
        if (
          sumaPorMesPatrocinador[i] !== 0 &&
          sumaPorMesInvima[i] !== 0
          ) {
          dataMesPatrocinador[i] = sumaPorMesPatrocinador[i] / cuentaPorMes[i];
        }
      }
      return {
        dataInvima: dataMesInvima,
        dataPatrocinador: dataMesPatrocinador,
      };
    });
  }

  async getTimeinitAllSponsor(year): Promise<any> {
    const fechasCantidades = [];
    const filterYear: ModelStudyFilterInput = {
      anhoInicioEstudio: {
        eq: year,
      },
    };
    return await this.api.ListStudys(filterYear, 10000).then((response) => {
      for (const study of response.items) {
        const fecha =
          (study.mesInicioEstudio + 1) +
          '-' +
          study.anhoInicioEstudio;
        const indexFechaExist = fechasCantidades.findIndex(
          (x) => x?.fecha === fecha
        );
        if (indexFechaExist === -1) {
          fechasCantidades.push({
            fecha,
            diasInicio: study.diasInicioEstudio,
            cantidad: 1,
          });
        } else {
          const nuevaFecha = {
            fecha,
            cantidad: fechasCantidades[indexFechaExist].cantidad + 1,
            diasInicio: fechasCantidades[indexFechaExist].diasInicio + study.diasInicioEstudio,
          };
          fechasCantidades.splice(indexFechaExist, 1, nuevaFecha);
        }
      }
      const fechas = [];
      const cantidades = [];
      for (const x of fechasCantidades) {
        fechas.push(x.fecha);
        cantidades.push(x.diasInicio / x.cantidad);
      }
      return {
        fechas,
        cantidades,
      };
    });
  }

  async getTimeinitSpecificSponsor(year, idSponsor): Promise<any> {
    const fechasCantidades = [];
    const filterYear: ModelStudyFilterInput = {
      anhoInicioEstudio: {
        eq: year,
      },
      sponsorID: {
        eq: idSponsor,
      },
    };
    return await this.api.ListStudys(filterYear, 10000).then((response) => {
      for (const study of response.items) {
        const fecha =
        (study.mesInicioEstudio + 1) +
          '-' +
          study.anhoInicioEstudio;
        const indexFechaExist = fechasCantidades.findIndex(
          (x) => x?.fecha === fecha
        );
        if (indexFechaExist === -1) {
          fechasCantidades.push({
            fecha,
            diasInicio: study.diasInicioEstudio,
            cantidad: 1,
          });
        } else {
          const cantidad = fechasCantidades[indexFechaExist].cantidad + 1;
          const nuevaFecha = {
            fecha,
            cantidad,
            diasInicio: fechasCantidades[indexFechaExist].diasInicio + study.diasInicioEstudio,
          };
          fechasCantidades.splice(indexFechaExist, 1, nuevaFecha);
        }
      }
      const fechas = [];
      const cantidades = [];
      for (const x of fechasCantidades) {
        fechas.push(x.fecha);
        cantidades.push(x.diasInicio / x.cantidad);
      }
      return {
        fechas,
        cantidades,
      };
    });
  }

  async getCenterTimeAll(year): Promise<any> {
    const dataMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dataMesCenter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cuentaPorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesCenter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const filterYear: ModelStudyCenterCommitteeFilterInput = {
      anhoAprobacionCentro: {
        eq: year,
      },
    };
    return await this.api
      .ListStudyCenterCommittees(filterYear, 10000)
      .then((response) => {
        for (const centro of response.items) {
          if (centro.mesAprobacionCentro !== null) {
            cuentaPorMes[centro.mesAprobacionCentro]++;

            sumaPorMesCenter[centro.mesAprobacionCentro] +=
              centro.diasAprobacionCentroCentro;

            sumaPorMesPatrocinador[centro.mesAprobacionCentro] +=
              centro.diasAprobacionCentroPatrocinador;
          }
        }

        for (let i = 0; i < 12; i++) {
          if (
            sumaPorMesPatrocinador[i] &&
            cuentaPorMes[i]
          ) {
            dataMesPatrocinador[i] = sumaPorMesPatrocinador[i] / cuentaPorMes[i];
          }

          if (
            sumaPorMesCenter[i] &&
            cuentaPorMes[i]
          ) {
            dataMesCenter[i] = sumaPorMesCenter[i] / cuentaPorMes[i];
          }
        }
        return {
          dataCentro: dataMesCenter,
          dataPatrocinador: dataMesPatrocinador,
        };
      });
  }

  async getCenterSponsorTime(year, committeeId): Promise<any> {
    const dataMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dataMesCenter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const cuentaPorMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesCenter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const sumaPorMesPatrocinador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const filterYear: ModelStudyCenterCommitteeFilterInput = {
      anhoAprobacionCentro: {
        eq: year,
      },
      committeeID: {
        eq: committeeId,
      },
    };
    return await this.api
      .ListStudyCenterCommittees(filterYear, 10000)
      .then((response) => {
        for (const study of response.items) {
          if (study.mesAprobacionCentro !== null) {
            cuentaPorMes[study.mesAprobacionCentro]++;

            sumaPorMesCenter[study.mesAprobacionCentro] +=
              study.diasAprobacionCentroCentro;

            sumaPorMesPatrocinador[study.mesAprobacionCentro] +=
              study.diasAprobacionCentroPatrocinador;
          }
        }

        for (let i = 0; i < 12; i++) {
          if (
            sumaPorMesPatrocinador[i] &&
            cuentaPorMes[i] &&
            sumaPorMesCenter[i]
          ) {
            dataMesPatrocinador[i] =
              sumaPorMesPatrocinador[i] / cuentaPorMes[i];
            dataMesCenter[i] = sumaPorMesCenter[i] / cuentaPorMes[i];
          }
        }
        return {
          dataCentro: dataMesCenter,
          dataPatrocinador: dataMesPatrocinador,
        };
      });
  }
}
