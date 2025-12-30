import { useEffect } from "react";
import "../../Css/Dish.css"
import { useHomeData } from "../../hooks/useHomeData";

export const Menu = () => {
  const { data, loading, error } = useHomeData();
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  console.log(data);
 
  return (
    <div className="w-75 d-flex justify-content-center align-items-center mx-auto flex-column border shadow ">
        
        <div className="Search-background-img w-100 d-flex justify-content-center align-items-center mb-5">
            <div className="search-text  light-text text-center">
                <h2 className=" ">Delicious food delivered to your doorstep</h2>

                <label className="mt-4 " htmlFor="search-input">
                    order from your favorite restaurants now!
                </label>

                <input type="text"  className="form-control mt-3 w-75 mx-auto " placeholder="Search for dishes or restaurants"/>
            </div>
        </div>

        {/* <div className=""> */}
          <div className="d-flex justify-content-between align-items-center p-3 mb-4 rounded-3 w-100">
              <h3 className="fw-bold text-start">Categories</h3>
              <div>
                  {data && data.data.map((category) => (
                      <div className="card" key={category.category_id}>
                          <div className="card-body">
                              <h5 className="card-title">{category.category_name}</h5>
                              <image src={"http://localhost:8080"+category.image_url} alt={category.category_name} className="card-img-top" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
    // </div>
  )
}
