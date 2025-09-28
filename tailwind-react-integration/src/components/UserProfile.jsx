// src/components/UserProfile.jsx - Responsive Version

function UserProfile() {
  return (
    // Responsive Container Styling:
    // Base: rounded-lg, shadow-lg, text-center (Always applied)
    // Sizing/Spacing:
    //  - sm:p-4, sm:max-w-xs (Smaller on small screens)
    //  - md:p-8, md:max-w-sm (Larger on medium screens and up)
    <div className="
        bg-gray-100 
        p-4 sm:p-4 md:p-8 
        max-w-xs sm:max-w-xs md:max-w-sm 
        mx-auto my-20 
        rounded-lg shadow-lg 
        text-center
    ">
      
      {/* Responsive Image Sizing:
          - sm:w-24 sm:h-24 (Smaller image on small screens)
          - md:w-36 md:h-36 (Larger image on medium screens and up)
          - rounded-full, mx-auto (Always applied)
      */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="
            rounded-full 
            w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 
            mx-auto
        "
      />
      
      {/* Responsive Heading Styling:
          - sm:text-lg (Smaller text on small screens)
          - md:text-xl (Larger text on medium screens and up)
          - text-blue-800, my-4 (Always applied)
      */}
      <h1 className="
          sm:text-lg md:text-xl 
          text-blue-800 my-4
      ">
        John Doe
      </h1>
      
      {/* Responsive Paragraph Styling:
          - sm:text-sm (Smaller text on small screens)
          - md:text-base (Larger text on medium screens and up)
          - text-gray-600 (Always applied)
      */}
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