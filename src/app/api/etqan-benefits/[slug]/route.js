import { NextResponse } from "next/server";
import qs from "qs";

export async function GET(req, { params }) {
  const { slug } =  await params;

 const query = qs.stringify({
  filters: { slug: { $eq: slug } },
  populate: {
    images: { fields: ['url', 'alternativeText', 'width', 'height'] },
    frontimage: { fields: ['url', 'alternativeText', 'width', 'height'] },
    headerImage: { fields: ['url', 'alternativeText', 'width', 'height'] },
  },
  locale: 'en',
});


  const url = `${process.env.STRAPI_URL}/api/etqan-benefits?${query}`;
  console.log("this is url",url);

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      cache: "no-store", // always fresh
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    console.log("this is the services data from api data",data);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
