import Image from "next/image";
import React from "react";
import sample from "../assets/sample.jpg";
import SimpleNav from "../components/SimpleNav";

type Props = {
  data: any,
  host: string,
};

function members({ data, host }: Props) {
  // console.log("data: ", data[0].attributes.pic.data.attributes.url);
  return (
    <div>
      <SimpleNav />

      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="font-bold px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Member
                    </th>
                    <th
                      scope="col"
                      className="font-bold px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Batch
                    </th>
                    <th
                      scope="col"
                      className="font-bold sm:table-cell hidden px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Branch
                    </th>
                    <th
                      scope="col"
                      className="font-bold sm:table-cell hidden px-5 py-3 bg-gray-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      City
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((member: any) => {
                    // console.log("pic: ", member.attributes.pic?.data.attributes.url)
                    let url =
                      member.attributes.pic?.data.attributes.url || "none";
                    return (
                      <tr key={member.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <a href="#" className="block relative">
                                <img
                                  alt="profil"
                                  src={`${host}${url}`}
                                  className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap font-semibold">
                                {member.attributes.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {member.attributes.batch}
                          </p>
                        </td>
                        <td className="sm:table-cell hidden px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {member.attributes.branch}
                          </p>
                        </td>
                        <td className="sm:table-cell hidden px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 text-green-900 leading-tight">
                            <span className="relative">{member.attributes.city}</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.BACKEND_HOST}/api/members?populate=pic&sort=name`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data.data, host: process.env.BACKEND_HOST } };
}

export default members;
