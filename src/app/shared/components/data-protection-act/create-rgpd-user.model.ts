import {RgpdType} from '@shared/models/RgpdType';

export interface CreateRgpdUser {
  mobile: number;
  rgpdType: RgpdType;
  agreement: File;
}
