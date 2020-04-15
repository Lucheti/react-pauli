export const MUJERES_18_29 = "MUJERES_18_29";
export const MUJERES_30_49 = "MUJERES_30_49";
export const MUJERES_50_Y_MAS = "MUJERES_50_Y_MAS";
export const HOMBRES_18_29 = "HOMBRES_18_29";
export const HOMBRES_30_49 = "HOMBRES_30_49";
export const HOMBRES_50_Y_MAS = "HOMBRES_50_Y_MAS";

type QuotaSegment =
  | typeof MUJERES_18_29
  | typeof MUJERES_30_49
  | typeof MUJERES_50_Y_MAS
  | typeof HOMBRES_18_29
  | typeof HOMBRES_30_49
  | typeof HOMBRES_50_Y_MAS;

const _18_29 = "18-29";
const _30_49 = "30-49";
const _50_Y_MAS = "50+";

type Ages = typeof _18_29 | typeof _30_49 | typeof _50_Y_MAS;

export interface QuotaSegmentItem {
  age: Ages;
  value: QuotaSegment;
}

const HOMBRES = "Hombres";
const MUJERES = "Mujeres";

type GENDERS = typeof HOMBRES | typeof MUJERES;

type CuotaEntity = {
  gender: GENDERS;
  segments: QuotaSegmentItem[];
};

export const QuotaSegments: CuotaEntity[] = [
  {
    gender: HOMBRES,
    segments: [
      {
        age: _18_29,
        value: HOMBRES_18_29
      },
      {
        age: _30_49,
        value: HOMBRES_30_49
      },
      {
        age: _50_Y_MAS,
        value: HOMBRES_50_Y_MAS
      }
    ]
  },
  {
    gender: MUJERES,
    segments: [
      {
        age: _18_29,
        value: MUJERES_18_29
      },
      {
        age: _30_49,
        value: MUJERES_30_49
      },
      {
        age: _50_Y_MAS,
        value: MUJERES_50_Y_MAS
      }
    ]
  }
];
