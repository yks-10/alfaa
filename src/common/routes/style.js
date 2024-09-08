const styles = {
    background: {
        backgroundColor: 'black',
        height: '100vh',
        color: 'white',
    },
    headText: {
        color: '#ffa31a',
        fontSize: '50px', // Corrected from 'fontsize'
        fontFamily: '"Fjalla One", sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
    },
    contact: {
        color: '#ffa31a',
        fontFamily: '"Raleway", sans-serif',
        fontWeight: 300,
        fontStyle: 'normal',
    },
    bodyText: {
        fontFamily: '"Raleway", sans-serif',
        fontWeight: 300,
        fontStyle: 'normal',
        marginLeft: '10px' // Corrected from 'marinLeft'
    },
    fontStyles: {
        fjallaOne: {
            fontFamily: '"Fjalla One", sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
        },
        raleway: (uniquifier, weight) => ({
            fontFamily: '"Raleway", sans-serif',
            fontWeight: weight,
            fontStyle: 'normal',
            className: `raleway-${uniquifier}`, // You can use this to generate a unique class name if needed
        }),
    },
};

export default styles;
