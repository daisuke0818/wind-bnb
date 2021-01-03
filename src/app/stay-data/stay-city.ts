import { Accommodation } from './../interface/accommodation.interface';
import { data } from './stay-data';

// 全データからcity欄を抽出したもの
const citiesDuplicated: string[] = data.map((dataInfo: Accommodation) => dataInfo.city);
// 重複をなくしたもの
const rowCities: string[] = Array.from(new Set(citiesDuplicated));
export const cities: string[] = ['all cities', ...rowCities];
