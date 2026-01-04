import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";
import Link from "next/link";
export default async function CategoryPage({ params }) {
  const { category } = await params;

  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: category,
        },
      },
      populate: {
        services: {
          populate: {
            serviceIcon: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },
      },
      status: "published",
    },
    { encodeValuesOnly: true }
  );

  const url = `${getStrapiURL()}/api/service-categories?${query}`;

  const res = await fetchData(url, process.env.STRAPI_JWT, {
    cache: "no-store",
  });
    console.log("this is the category data",res);
  const categoryData = res?.data?.[0];

  if (!categoryData) {
    return <h2 className="text-center mt-5">Category not found</h2>;
  }

  const services = categoryData.services || [];

  if (!services.length) {
    return <h2 className="text-center mt-5">No Solution found</h2>;
  }

  return (
    <section
      className="container py-2 bg-secondary mb-5"
      style={{ marginTop: "6rem" }}
    >
      <section className="container pt-2 pt-lg-0 pb-5 mb-md-4 mb-lg-5">
        <div className="container pb-4 pt-5">
          <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">
            {categoryData.title}
          </h2>

          {categoryData.summary && (
            <div className="row align-items-center pb-5 mb-lg-2">
              <div className="col-md-8 text-center text-md-start">
                <p className="fs-lg text-muted mb-md-0">
                  {categoryData.summary}
                </p>
              </div>
            </div>
          )}

          <div className="row row-cols-1 row-cols-md-2">
            {services.map((service) => (
              <div key={service.id} className="col py-4 my-2 my-sm-3">
                <Link
                  href={`/services/${category}/${service.slug}`}
                  className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
                >
                  <div className="card-body pt-3">
                    {/* ICON */}
                    <div
                      className="d-inline-block rounded-3 position-absolute top-0 translate-middle-y p-3"
                      style={{
                        backgroundColor: "#8B47CB",
                        boxShadow: "#EF611B",
                      }}
                    >
                      <img
                        src={
                          service?.serviceIcon?.url ||
                          "/assets/img/services/icons/rocket.svg"
                        }
                        width="55"
                        height="55"
                        alt={
                          service?.serviceIcon?.alternativeText ||
                          service.title
                        }
                      />
                    </div>

                    {/* TITLE */}
                    <h2 className="h4 d-inline-flex align-items-center">
                      {service.title}
                      <i
                        className="bx bx-right-arrow-circle fs-3 ms-2"
                        style={{ color: "#8B47CB" }}
                      ></i>
                    </h2>

                    {/* SUMMARY */}
                    <p className="fs-sm text-body mb-0">
                      {service.summary}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
