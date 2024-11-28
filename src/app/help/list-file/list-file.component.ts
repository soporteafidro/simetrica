import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SisecService } from 'src/app/services/sisec.service';
import { Logger } from 'aws-amplify';
import { AuthService } from 'src/app/services/auth.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FilePreviewComponent } from '../file-preview/file-preview.component';
const logger = new Logger('list-file');

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.scss'],
})
export class ListFileComponent implements OnInit {
  nameDocument = '';
  listFiles: any[] = [];
  columns: any[] = [];
  items: any[] = [];
  first = 0;
  rows = 10;
  fileSelected = null;
  rol = null;

  constructor(
    private messageService: MessageService,
    private sisecService: SisecService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private dialogService: DialogService
  ) {}
  ngOnInit(): void {
    this.rol = this.authService.getUserRole();
    this.sisecService.showSpinner('Listando archivos...');
    this.sisecService
      .listFile()
      .then((response) => {
        logger.debug('listFile response', response);
        const fileFormated = [];
        for (const f of response) {
          fileFormated.push({ name: f.key.replace('files/', ''), key: f.key });
        }
        this.buildFileList(fileFormated);
        this.sisecService.hideSpinner();
      })
      .catch((error) => {
        logger.error('listFile error', error);
        this.sisecService.hideSpinner();
      });

    if (this.rol === 'Admin') {
      this.items = [
        {
          label: 'Descargar',
          icon: 'pi pi-download',
          command: () => {
            this.downloadFile();
          },
        },
        {
          label: 'Eliminar',
          icon: 'pi pi-trash',
          command: () => {
            this.deleteFile();
          },
        },
        {
          label: 'Ver vista previa',
          icon: 'pi pi-image',
          command: () => {
            this.openPreview(this.fileSelected);
          },
        },
      ];
    } else {
      this.items = [
        {
          label: 'Descargar',
          icon: 'pi pi-download',
          command: () => {
            this.downloadFile();
          },
        },
        {
          label: 'Ver vista previa',
          icon: 'pi pi-image',
          command: () => {
            this.openPreview(this.fileSelected);
          },
        },
      ];
    }
  }
  next(): void {
    this.first = this.first + this.rows;
  }
  prev(): void {
    this.first = this.first - this.rows;
  }
  reset(): void {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.listFiles
      ? this.first === this.listFiles.length - this.rows
      : true;
  }
  isFirstPage(): boolean {
    return this.listFiles ? this.first === 0 : true;
  }
  buildFileList(files: any[]): void {
    this.columns = [{ value: 'Nombre de archivo', key: 'name' }];
    this.listFiles = files.map((f) => {
      return {
        name: f.name,
        key: f.key,
      };
    });
  }
  validatedFile(files: FileList): void {
    this.columns = [{ value: 'Nombre de archivo', key: 'name' }];
    for (let i = 0; i < files.length; ++i) {
      logger.debug(files.item(i));
      if (files.item(i).size > 10485760) {
        return this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `El archivo con el nombre ${
            files.item(i).name
          } supera el tamaño máximo de 10 MB`,
        });
      }
    }

    for (let i = 0; i < files.length; ++i) {
      logger.debug(files.item(i).name);
      const index = this.listFiles.findIndex(
        (x) => x.name === files.item(i).name
      );
      if (index === -1) {
        this.uploadFile(files.item(i), files.item(i).name, files.item(i).type);
      } else {
        this.confirmationService.confirm({
          message: `El archivo con el nombre ${
            files.item(i).name
          } ya existe desea reemplazarlo?`,
          acceptLabel: 'reemplazar',
          rejectLabel: 'cancelar',
          accept: () => {
            this.uploadFile(
              files.item(i),
              files.item(i).name,
              files.item(i).type
            );
          },
        });
      }
    }
  }
  uploadFile(fileToUpload, name, type): void {
    if (fileToUpload) {
      this.sisecService.showSpinner('Cargando archivo al servidor...');
      this.sisecService
        .saveFile('files/', fileToUpload, name, type)
        .then((response) => {
          logger.debug('saveImage response', response);
          const index = this.listFiles.findIndex((x) => x.name === name);
          if (index === -1) {
            this.listFiles.push({
              name: response.key.replace('files/', ''),
              key: response.key,
            });
          } else {
            this.listFiles.splice(index, 1, {
              name: response.key.replace('files/', ''),
              key: response.key,
            });
          }
          this.sisecService.hideSpinner();
        })
        .catch((error) => logger.error('saveImage error', error));
    }
  }
  downloadFile(): void {
    if (this.fileSelected) {
      this.sisecService
        .getFile(this.fileSelected.key)
        .then((response) => {
          logger.debug('getFile response', response);
          window.open(response, '_blank');
        })
        .catch((error) => {
          logger.error('saveImage error', error);
        });
    }
  }
  deleteFile(): void {
    this.confirmationService.confirm({
      message: `Esta seguro que desea eliminar el archivo ${this.fileSelected.name}?`,
      accept: () => {
        if (this.fileSelected) {
          this.sisecService.showSpinner(
            `Eliminando el archivo ${this.fileSelected.name}`
          );
          this.sisecService
            .deleteFile(this.fileSelected.key)
            .then((response) => {
              logger.debug('deleteFile response', response);
              const i = this.listFiles.findIndex(
                (x) => x.name === this.fileSelected.name
              );
              if (i !== -1) {
                this.listFiles.splice(i, 1);
              }
            })
            .catch((error) => {
              logger.error('deleteFile error', error);
            })
            .finally(() => this.sisecService.hideSpinner());
        }
      },
    });
  }
  selectFile(f): void {
    this.fileSelected = f;
  }
  openPreview(f): void {
    const ref = this.dialogService.open(FilePreviewComponent, {
      header: 'Vista previa',
      width: '70%',
      data: {
        file: f.key,
        type: f.name.slice(f.name.lastIndexOf('.') + 1, f.name.length),
      },
    });
  }
}
