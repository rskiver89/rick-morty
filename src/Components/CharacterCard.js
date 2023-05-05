import React from "react";
import "../Styles/Characters.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CharacterCard({ character }) {
  const cardVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="character-card"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
    >
    <Link to={`/details/${character.id}`}>
        <img src={character.image} />
              <p>{character.name}</p>
    </Link>
    </motion.div>
  );
}

export default CharacterCard;
