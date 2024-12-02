import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Accord({ verse }) {
  if (!verse) {
    return (
      <Accordion variant="splitted">
        <AccordionItem key="0" title="No Data">
          No verse data available.
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Accordion variant="splitted">
      {/* Sanskrit Text */}
      <AccordionItem key="1" title="Sanskrit Text">
        <p>
          
          {verse.text || "No Sanskrit text available."}
        </p>
      </AccordionItem>

      {/* Transliteration */}
      <AccordionItem key="2" title="Transliteration">
        <p>
          <strong>Verse {verse.verse_number}: </strong>
          {verse.transliteration || "No transliteration available."}
        </p>
      </AccordionItem>

      {/* Word Meanings */}
      <AccordionItem key="3" title="Word Meanings">
        <p>
          <strong>Verse {verse.verse_number}: </strong>
          {verse.word_meanings || "No word meanings available."}
        </p>
      </AccordionItem>

      {/* Translations */}
      <AccordionItem key="4" title="Translations">
        {verse.translations && verse.translations.length > 0 ? (
          verse.translations.map((translation, index) => (
            <div key={index}>
              <p>
                <strong>{translation.author_name}:</strong>{" "}
                {translation.description}
              </p>
            </div>
          ))
        ) : (
          <p>No translations available.</p>
        )}
      </AccordionItem>

      {/* Commentaries */}
      <AccordionItem key="5" title="Commentaries">
        {verse.commentaries && verse.commentaries.length > 0 ? (
          verse.commentaries.map((commentary, index) => (
            <div key={index}>
              <p>
                <strong>{commentary.author_name}:</strong>{" "}
                {commentary.description}
              </p>
            </div>
          ))
        ) : (
          <p>No commentaries available.</p>
        )}
      </AccordionItem>
    </Accordion>
  );
}
