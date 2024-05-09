const FrameComponent = () => {
  return (
    <section className="flex py-0 pb-20 pr-0 pl-2 ">
      <div className="flex-1 flex gap-4">
        <div className="h-36 w-48 lg:w-72 flex gap-0">
          <img
            className="h-36 w-36 object-cover"
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
          <div className="flex-1 flex flex-col justify-center gap-2">
            <b className="text-sm text-nowrap">Published by</b>
            <img
              className="h-16 w-full object-contain"
              alt=""
              src="/component-40-1@2x.png"
            />
          </div>
        </div>
        <div className="w-3/4 flex flex-col justify-center">
          <div className="flex gap-2 items-center lg:absolute lg:left-3/4">
            <img
              className="h-12 w-12"
              alt=""
              src="/frame-6.svg"
            />
            <h3 className="text-xl font-semibold text-blue-500 ">Create Flashcard</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;