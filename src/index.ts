/**
 * This is the main entry file.
*/
import * as util from './util';
import * as type from './type';

/**
 * Method to process all records and return result
 * This is the main method.
*/
export default function BMICalculator(datas: Array<type.input>) {
    let overWeightTotal = 0;
    let overweightCategory = 'Over Weight';
    for (let data of datas) {
        let proecssedData = util.processData(data);
        if (proecssedData.BMI_Category === overweightCategory) {
            overWeightTotal++;
        }
    }
    return {
        datas,
        overWeightTotal
    }
}



