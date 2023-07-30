export default function App() {
	const posts = [
		{
			id: 1,
			text: "Hello, world!",
			timestamp: "a minute ago",
			author: {
				username: "susan",
			},
		},
		{
			id: 2,
			text: "Hello, world!",
			timestamp: "a minute ago",
			author: {
				username: "susan",
			},
		},
		{
			id: 3,
			text: "Hello, world!",
			timestamp: "a minute ago",
			author: {
				username: "susan",
			},
		},
	];

	return (
		<>
			<h1>Microblog</h1>
			{/* <b>{post.author.username}</b> &mdash; {post.timestamp}
                <br />
                {post.text} */}
			<ul>
				{posts.map((post) => {
					return (
						<li key={post.id}>
							<b>{post.author.username}</b> &mdash;{" "}
							{post.timestamp}
							<br />
							{post.text}
							<br />
						</li>
					);
				})}
			</ul>
		</>
	);
}
