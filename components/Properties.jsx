"use client";
import React, { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Spinner from "@/components/Spinner";
import Pagination from "@/components/Pagination";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage]= useState(1);
  const [pageSize, setPageSize]= useState(6);
  const [totalProperties, setTotalProperties]= useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`/api/properties?page=${page}&pageSize=${pageSize}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setProperties(data.properties);
        setTotalProperties(data.totalProperties);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}

        <Pagination page={page} pageSize={pageSize} totalProperties={totalProperties} onPageChange={handlePageChange} />
      </div>
    </section>
  );
};

export default Properties;
