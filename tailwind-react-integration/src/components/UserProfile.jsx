// src/components/UserProfile.jsx - Interactive and Responsive Version

function UserProfile() {
  return (
    // Card Container Styling:
    // Added transition-shadow and hover:shadow-xl for the "lifting" effect.
    <div className="
        bg-gray-100 
        p-4 sm:p-4 md:p-8 
        max-w-xs sm:max-w-xs md:max-w-sm 
        mx-auto my-20 
        rounded-lg shadow-lg 
        text-center 
        transition-shadow duration-300 ease-in-out hover:shadow-xl 
    ">
      
      {/* Image Styling:
          Added transition-transform, duration-300, and hover:scale-110 for the smooth growth effect.
      */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="
            rounded-full 
            w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
            mx-auto 
            transition-transform duration-300 ease-in-out hover:scale-110
        "
      />
      
      {/* Heading Styling:
          Added transition-colors and hover:text-blue-500 for the color change effect.
      */}
      <h1 className="
          sm:text-lg md:text-xl 
          text-blue-800 my-4 
          transition-colors duration-300 ease-in-out hover:text-blue-500
      ">
        John Doe
      </h1>
      
      {/* Paragraph Styling: (No interactive changes requested here, maintains original styles) */}
      <p className="
          sm:text-sm md:text-base 
          text-gray-600
      ">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;