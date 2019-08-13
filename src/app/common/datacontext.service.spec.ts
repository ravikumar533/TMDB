import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { DataContextService } from "./datacontext.service";
import { HttpClient } from "@angular/common/http";

interface Data {
  name: string;
}
describe("DatacontextService (with mocks)", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let dataContextService: DataContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataContextService],
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    dataContextService = TestBed.get(DataContextService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    const service: DataContextService = TestBed.get(DataContextService);
    expect(service).toBeTruthy();
  });
  it("Can test with HttpClient.get", () => {
    const testData: Data = { name: "Test Data" };

    // Make an HTTP GET request
    httpClient.get<Data>("/data").subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne("/data");

    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});
