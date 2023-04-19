import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import reactPic from "../../public/react.png";
import sequelize from "../../public/sequelize.png";
import mysql from "../../public/mysql.png";
import nodejs from "../../public/nodejs.png";
import expressjs from "../../public/expressjs.png";
import tailwind from "../../public/tailwind.jpg";
import postman from "../../public/postman.jpg";
import docker from "../../public/docker.jpg";

type Props = {};

export default function ExperienceCardPwd({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-28 h-28 rounded-full xl:[200] object-cover object-center"
				src="/unnamed.jpg"
				alt="Company pic"
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-3xl font-light">Full stack web development</h4>
				<p className="font-bold text-xl mt-1">
					Purwadhika Digital Technology School
				</p>
				<div className="flex space-x-4 my-2">
					<Image
						className="h-10 w-10 rounded-full"
						src={reactPic}
						alt="reactJs"
					/>
					<Image
						className="h-10 w-10 rounded-full"
						src={sequelize}
						alt="sequelize"
					/>
					<Image className="h-10 w-10 rounded-full" src={mysql} alt="mysql" />
					<Image className="h-10 w-10 rounded-full" src={nodejs} alt="node" />
					<Image
						className="h-10 w-10 rounded-full"
						src={expressjs}
						alt="expressjs"
					/>
					<Image
						className="h-10 w-10 rounded-full"
						src={tailwind}
						alt="tailwind"
					/>
					<Image
						className="h-10 w-10 rounded-full"
						src={postman}
						alt="postman"
					/>
					<Image className="h-10 w-10 rounded-full" src={docker} alt="docker" />
				</div>
				<p className="my-4">October 2022 - May 2023 </p>

				<ul className="list-disc space-y-2 ml-5 text-md">
					<li>Make a responsive front end with tailwind css, reactJS</li>
					<li>Make REST API with express.JS</li>
					<li>Make RDBMS using Sequelize ORM, and MySQL</li>
					<li>Some experience with redis and docker</li>
					<li>Implement AGILE workflow using JIRA</li>
					<li>Deploying both front end and back end side of a web app</li>
				</ul>
			</div>
		</article>
	);
}
