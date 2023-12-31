import getJsonResponse from "@/lib/getJsonResponse";

export default async function Home() {
  const data = await getJsonResponse();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <div className="card-header text-center">
              <h3>JSON Response</h3>
            </div>
            <div className="card-body text-center">
              <h4>{data.message}</h4>
              <h4>Version: {data.version}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
