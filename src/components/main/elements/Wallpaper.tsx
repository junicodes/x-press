import { DefaultImage } from "../../sub-elements"
import { authWallpaper, indicator } from "../../../utils/images";
import mainStyles from '../main.module.scss';

const Wallpaper = () => {
  return (
    <section className={`px-2 lg:p-5 pt-0 h-full flex flex-col justify-center items-center ${mainStyles.wallpaperContainer}`}>
        <div className="w-full">
          <h2 className="text-2xl text-primary text-center mb-10">
            Organize your customer information
          </h2>
          <div className="flex flex-row justify-center items-center">
            <DefaultImage
              src={authWallpaper}
              variant={"w-full h-full"}
              handleChange={() => {}}
              alt="SME LOGO"
              value={""}
              containerVariant={`${mainStyles.wallpaper}`}
            />
          </div>
          <DefaultImage
            src={indicator}
            variant={"w-16 h-2"}
            handleChange={() => {}}
            alt="SME LOGO"
            value={""}
            containerVariant={`flex flex-row justify-center my-12`}
          />
        </div>
    </section>
  )
}

export default Wallpaper