export function VideoCard(props: any) {
  return (
     //bhai yaha pe krna tha class add kr k padding woh sb andr nahi krna tha  tu thoda sa bklhai kya
    <div>
      <img src={props.thumbnailImage} className="rounded-xl pr-6  pl-2 pt-6 cursor-pointer" ></img>
      <div className="grid grid-cols-12 pt-4">
        <div className="col-span-1">
          <img className={"rounded-full w-25 h-25 "} src={props.channelImage}></img>
        </div>
        <div className="col-span-11 pl-3 pr-3  text-l">
          <div>{props.title}</div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11  text-gray-400 text-base">
            {props.views }    . {props.timesstamp}
          </div>
        </div>
      </div>
    </div>
  );
}
