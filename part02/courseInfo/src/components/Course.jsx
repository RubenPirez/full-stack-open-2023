const Header = ({ header }) => {
	return <h3>{header}</h3>
};

const Part = ({ parts }) => {
	return (
		<ul>
			{parts.map(part => (
				<li key={part.id}> {part.name} <strong>{part.exercises}</strong> </li>
			))}
		</ul>
	)
}

const Content = ({ parts }) => {
	const totalExercises = parts.reduce((sum, part) => {
		return sum + part.exercises
	}, 0)

	return (
		<>
			<Part parts={parts} />
			<p><strong>Total of {totalExercises} exercises</strong></p>
		</>
	)
}

const Course = ({ course }) => {
	return (
		<div>
			<Header header={course.name} />
			<Content parts={course.parts} />
		</div>
	)
}

export default Course