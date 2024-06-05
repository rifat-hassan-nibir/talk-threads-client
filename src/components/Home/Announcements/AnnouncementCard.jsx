const AnnouncementCard = () => {
  return (
    <div>
      <div className="lg:px-8 px-6 lg:py-4 py-3 border bg-gray-50 rounded-lg">
        <div className="mt-2">
          <h3 className="lg:text-xl text-lg font-bold text-gray-700">Accessibility tools for designers and developers</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste
            iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              className="object-cover w-10 h-10 mr-4 rounded-full"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <p className="font-bold text-gray-700">Khatab wedaa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
