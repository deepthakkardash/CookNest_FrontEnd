import "../../Css/Dish.css"

export const Menu = () => {
  return (
    <div className="w-75 d-flex justify-content-center align-items-center mx-auto flex-column">
        
        <div className="Search-background-img w-100 d-flex justify-content-center align-items-center mb-5">
            <div className="search-text  light-text text-center">
                <h2 className=" ">Delicious food delivered to your doorstep</h2>

                <label className="mt-4 " htmlFor="search-input">
                    order from your favorite restaurants now!
                </label>

                <input type="text"  className="form-control mt-3 w-75 mx-auto " placeholder="Search for dishes or restaurants"/>
            </div>
        </div>


    
    
    </div>
  )
}
