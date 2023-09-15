import React, { ReactNode } from "react";

interface TextImgContainerProps {
	addStyle?: string;
	flexDirection?: string;
	sectionContent?: ReactNode;
	imgLink1?: string;
	imgLink2?: string;
	imgLink3?: string;
}

const TextImgContainer: React.FC<TextImgContainerProps> = ({
	addStyle,
	flexDirection,
	sectionContent,
	imgLink1,
	imgLink2,
	imgLink3,
}: TextImgContainerProps) => {
	return (
		<>
			<section className={`min-h-[80vh] ${addStyle} py-[40px] font-poppins`}>
				<div
					className={`container h-full mx-auto flex ${flexDirection} justify-between gap-6 md:gap-4`}
				>
					{/* First Div */}
					<div className="w-full sm:w-[50%] flex flex-row items-center">
						{sectionContent}
					</div>

					{/* Second Div */}
					<div className="w-full sm:w-[50%]">
						<div className="h-full w-full flex flex-row gap-4 items-center">
							<div className="w-[50%] flex flex-col gap-4 justify-between">
								<div className="h-1/3">
									<img
										className="object-cover rounded h-full w-full"
										src={`${imgLink1}`}
										alt="someone-1"
									/>
								</div>
								<div className="h-2/3">
									<img
										className="object-cover rounded h-full w-full"
										src={`${imgLink2}`}
										alt="someone-2"
									/>
								</div>
							</div>
							<div className="w-[50%] h-2/3">
								<img
									className="object-cover rounded h-full w-full"
									src={`${imgLink3}`}
									alt="someone-3"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TextImgContainer;
