const SocialLink = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        {icon}
      </a>
    </li>
  )
}

export default SocialLink;