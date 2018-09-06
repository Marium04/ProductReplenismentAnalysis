import { ForecastingSalesPage } from './app.po';

describe('forecasting-sales App', function() {
  let page: ForecastingSalesPage;

  beforeEach(() => {
    page = new ForecastingSalesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
