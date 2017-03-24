import { CaSearsForecastingSalesPage } from './app.po';

describe('ca-sears-forecasting-sales App', function() {
  let page: CaSearsForecastingSalesPage;

  beforeEach(() => {
    page = new CaSearsForecastingSalesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
