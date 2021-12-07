module.exports = {
    columns: 12,
    offset: '30px', //columns
    container: {
        maxWidth: '1340px',
        fields: '30px' // Внимание! fields обязан быть >= offset / 2
    },
    breakPoints: {
        xl: {
            width: '1200px'
        },
        // lg: {
        //     width: '992px',
        //     fields: '70px'
        // },
        md: {
            width: '768px',
            fields: '24px'
        },
        sm: {
            width: '576px'
        },
        xs: {
            width: '320px',
            fields: '15px'
        }
    },
    // detailedCalc: true
};