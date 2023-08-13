<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	let messageSent = false;
</script>

<div class="hero min-h-[90vh]" style="background-image: url(/images/hero-image.jpg);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-lg">
			<h1 class="mb-5 text-5xl font-bold">Hi👋 My name is Hugo Woods</h1>
			<p class="mb-5">
				Dedicated and detail-oriented software developer with a passion for crafting elegant code
				solutions, eager to contribute my burgeoning expertise to innovative projects
			</p>
			<a class="btn btn-primary" href="#my-projects">Learn More</a>
		</div>
	</div>
</div>

<div class="mx-auto max-w-5xl mt-28 pb-28 flex flex-col gap-y-52">
	<div>
		<div class="mb-8">
			<h2 class="text-4xl font-semibold mb-4" id="my-projects">My Projects</h2>
			<p>
				Welcome to a curated collection that embodies my coding journey, a testament to my
				commitment to creating seamless experiences through elegant solutions. Explore these
				projects that encapsulate my passion for innovation and mark my progress in the world of
				development.
			</p>
		</div>
		<div class="flex gap-x-4">
			<Card
				src="/images/todo-list.jpg"
				title="Todo List App"
				body="Presenting a meticulously designed todo list app, seamlessly organize tasks, boost productivity through its intuitive interface."
				action="Github"
				href="#"
			/>
			<Card
				src="/images/calculator.png"
				title="Calculator"
				body=" meticulously crafted calculator app, thoughtfully engineered to provide seamless arithmetic operations, reflecting my dedication to user-friendly design and coding precision."
				action="Github"
				href="#"
			/>
			<Card
				src="/images/countdown.png"
				title="Countdown Timer"
				body="Step into a world where moments matter, as we unveil a digital companion like no other. Behold, the Countdown Timer App – an elegant fusion of design and functionality. "
				action="Github"
				href="#"
			/>
		</div>
	</div>
	<div>
		<div class="mb-12">
			<h2 class="text-4xl font-semibold mb-4" id="work-experience">Work Experience</h2>
			<p>
				Embark on a visual tour of my professional journey, where each role is a chapter etched with
				growth and learning. From collaborating in dynamic teams to tackling real-world challenges,
				these experiences have sculpted my skills and deepened my understanding. Join me in
				revisiting these chapters that define my path in the realm of software development.
			</p>
		</div>
		<div class="flex flex-col gap-y-12">
			<div>
				<h3 class="text-xl text-gray-500 font-semibold" id="my-projects">April 2023 - July 2023</h3>
				<h3 class="text-3xl font-semibold mb-4" id="my-projects">X Corp</h3>
				<div class="flex items-center">
					<div class="flex flex-col gap-y-4">
						<p>
							Immersed in a transformative collaboration with Elon, an influential entrepreneur and
							visionary leader, where I contributed to cutting-edge projects that pushed the
							boundaries of innovation and technology, fostering an environment of ceaseless
							creativity and forward-thinking.
						</p>
						<p>
							Concluded my tenure following a strategic organizational shift, as part of a larger
							restructuring effort aimed at optimizing resource allocation and aligning teams with
							evolving business objectives, a decision made in line with the dynamic nature of the
							industry and the pursuit of sustainable growth.
						</p>
					</div>
					<img src="/images/x-twitter.jpg" alt="x twitter" />
				</div>
			</div>
			<div>
				<h3 class="text-xl text-gray-500 font-semibold" id="my-projects">
					September 2022 - March 2023
				</h3>
				<h3 class="text-3xl font-semibold mb-4" id="my-projects">Silicon Valley Bank</h3>
				<div class="flex items-center">
					<div class="flex flex-col gap-y-4">
						<p>
							Engaged in a pivotal role within the esteemed Silicon Valley Bank, a dynamic and
							forward-looking financial institution at the heart of technological innovation.
							Collaborated closely with diverse teams and innovative startups, contributing to the
							growth and success of both clients and the bank, while fostering a culture of
							excellence and adaptability in the ever-evolving tech landscape.
						</p>
						<p>
							Departed due to unforeseen circumstances following the bank's structural challenges, a
							scenario reflective of the broader economic landscape, and embraced this transition as
							an opportunity for personal and professional growth.
						</p>
					</div>
					<img src="/images/svb-logo.jpg" alt="silicon valley bank" class="w-80" />
				</div>
			</div>
		</div>
	</div>
	<div>
		<div class="mb-4">
			<h2 class="text-4xl font-semibold mb-4" id="contact-me">Contact Me</h2>
			<p>
				For any inquiries, professional engagements, or potential collaborations, please don't
				hesitate to contact me. Looking forward to connecting and exploring opportunities!
			</p>
		</div>
		{#if messageSent}
			<div class="alert alert-success mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Your message has been sent successfully!</span>
			</div>
		{/if}
		<div class="form-control w-full max-w-lg mx-auto">
			<label class="label" for="email-input">
				<span class="label-text">Email:</span>
			</label>
			<input
				id="email-input"
				type="text"
				placeholder="hugo@example.com"
				class="input input-bordered w-full"
			/>
			<label for="body-input" class="label">
				<span class="label-text">Your Message</span>
			</label>
			<textarea
				id="body-input"
				class="textarea textarea-bordered h-24"
				placeholder="Hi Hugo, I love your work..."
			/>
			<button class="btn btn-primary mt-4" on:click={() => (messageSent = true)}>Submit</button>
		</div>
	</div>
</div>
