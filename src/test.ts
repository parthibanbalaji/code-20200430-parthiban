/**
 * This File is to maintain test cases.
 * Using mocha library to run tests.
 * Using chai as a asserting library for tests.
*/

import * as datas from './test-data';
import BMICalculator from './index';
import { expect } from 'chai';
import * as util from './util'

describe('Test BMI calculator library', function () {

    it('Should return BMI category and Over Weight Total', function () {
        let result = BMICalculator(datas.sampleInput);
        expect(result).have.property('datas');
        expect(result).have.property('overWeightTotal');
    })

    it('Should execute with in time limit of 2 seconds', function () {
        let startTime = process.hrtime.bigint();
        let result = BMICalculator(datas.oneLakhSampleDatas);
        let endTime = process.hrtime.bigint();
        let seconds = Number(endTime - startTime) / 1000000000;
        expect(result.datas.length).equal(100000);
        expect(seconds).lessThan(2);
    })

    it('Should return consistent result if run multiple times with same data', function () {
        for (let i = 0; i < 10; i++) {
            let result = BMICalculator(datas.orderedDataBasedOnBMICategory);
            expect(result.datas[0]).property('BMI_Category').equal(util.categories[0].BMI_Category);
            expect(result.datas[1]).property('BMI_Category').equal(util.categories[1].BMI_Category);
            expect(result.datas[2]).property('BMI_Category').equal(util.categories[2].BMI_Category);
            expect(result.datas[3]).property('BMI_Category').equal(util.categories[3].BMI_Category);
            expect(result.datas[4]).property('BMI_Category').equal(util.categories[4].BMI_Category);
            expect(result.datas[5]).property('BMI_Category').equal(util.categories[5].BMI_Category);
        }
    })
})
