import { NextResponse } from "next/server";
import qs from "qs";

export async function GET(req, { params }) {
  const { category, slug } = await params; // ← grab both

  const query = qs.stringify({
    filters: {
      slug: { $eq: slug },
  
    },
    populate: {
      bannerImage: { fields: ['url', 'alternativeText', 'width', 'height'] },
      solutionIcon: { fields: ['url', 'alternativeText', 'width', 'height'] },
    },
    locale: 'en',
  });

  const url = `${process.env.STRAPI_URL}/api/solutions?${query}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}