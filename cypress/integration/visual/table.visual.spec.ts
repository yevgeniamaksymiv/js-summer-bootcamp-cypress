describe('Visual Regression - Chart.js', () => {
    before(function () {
        cy.visit(
            // 'https://www.chartjs.org/docs/latest/samples/line/line.html'
            'https://www.chartjs.org/docs/latest/samples/line/interpolation.html'
        );
    });

    it('should verify chart with initial values snapshot', () => {
        cy.wait(1000);
        cy.get('.chart-view').matchImageSnapshot();
    });

});

