import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"

const Post = ({
  title,
  shortDescription,
  link,
  linkTitle = "Show more",
  date,
  image,
  tags,
}) => (
  <article>
    <div className="p-3">
      <Card>
        {image && <Card.Img variant="top" src={image} alt={title} />}
        <div>{date}</div>
        <div>Теги: {tags}</div>
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: title }} />
          <Card.Text>
            <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
          </Card.Text>
          <Link to={link}>{linkTitle}</Link>
        </Card.Body>
      </Card>
    </div>
  </article>
)

export default Post
