import "./category-item.styles.scss"
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category
  console.log(category)
  return (
    <div className="category-container">
      <h1>{title}</h1>
      <div style={{ background: `url(${imageUrl})` }}></div>
    </div>
  )
}

export default CategoryItem
