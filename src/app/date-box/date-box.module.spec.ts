import { DateBoxModule } from './date-box.module';

describe('DateBoxModule', () => {
  let dateBoxModule: DateBoxModule;

  beforeEach(() => {
    dateBoxModule = new DateBoxModule();
  });

  it('should create an instance', () => {
    expect(dateBoxModule).toBeTruthy();
  });
});
