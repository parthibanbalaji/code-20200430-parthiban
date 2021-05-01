# code-20200430-parthiban
This Code respository follows the structure of a Node npm module.


# Steps to run

1. Download code.
    https://github.com/parthibanbalaji/code-20200430-parthiban.git
2. Install dependencies  
    npm install
3. Compile
    npm run build
4. Run test cases
    npm run test


# Usage 
    let data = [{"Gender":"Male","HeightCm":172,"WeightKg":70}]
    let result = BMICalculator(data);
    console.log(result) 
    /* {
        datas : [{"Gender":"Male","HeightCm":172,"WeightKg":70, BMI: 23.66,
        BMI_Category: 'Normal Weight',
        Health_Risk_Category: 'Low Risk' }}}],
        overWeightTotal : 0
    } */

# Note
    dist/index.js is the main entry.
    This will export a function BMICalculator() which is the main method.
    BMICalculator() expects input Array of objects.


