
import { IMG_URL } from "../utils/contain";
import { Link } from "react-router-dom";

const ListOfItems = (props) => {
    const { bannerItem } = props

    // console.log(bannerItem);

    return (
        <div>
            <h2 className=" text-white mt-6 text-3xl font-bold">What's in Your Mind?</h2>
            <div className=" flex overflow-scroll mt-4 rounded-lg">

                {bannerItem.map((banner, i) => {

                    const url = banner.action.link
                    const urlObj = new URL(url);
                    const collectionId = urlObj.searchParams.get("collection_id");
                    const tagId = urlObj.searchParams.get("tags");
                    // console.log(collectionId, tagId);

                    return (
                        <Link className=" cursor-pointer" key={banner.id} to={"/collection/" + collectionId + "/tags/" + tagId}>
                            <img className=" max-w-28 md:max-w-40" src={IMG_URL + banner.imageId} />
                        </Link>
                    )
                }
                )}
            </div>

        </div>

    )
}
export default ListOfItems;