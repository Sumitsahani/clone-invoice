const styles = {
	boxWidth: "xl:max-w-[1280px] w-full mx-auto",

	heading2:
		"font-poppins font-semibold xs:text-[48px] text-[40px] text-[#0066FF] xs:leading-[76.8px] leading-[66.8px] w-full", // Heading color set to #0066FF
	paragraph:
		"font-poppins font-normal text-black text-[18px] leading-[30.8px]", // Paragraph text color set to black

	flexCenter: "flex justify-center items-center",
	flexStart: "flex justify-center items-start",

	paddingX: "sm:px-16 px-6",
	paddingY: "sm:py-16 py-6",
	padding: "sm:px-16 px-6 sm:py-12 py-4",

	marginX: "sm:mx-16 mx-6",
	marginY: "sm:my-16 my-6",

	// Button styles
	button:
		"bg-white text-black border border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded", // Button styles added
};

export const layout = {
	section: `flex md:flex-row flex-col ${styles.paddingY}`,
	sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

	sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
	sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

	sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
