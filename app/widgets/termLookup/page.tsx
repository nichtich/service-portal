'use client'

import AutoCompleteTSS from "@/app/ui/widgets/autocomplete"
import MetadataWidgetTSS from "@/app/ui/widgets/MetadataWidget"
import { useState } from "react";
import { AutoCompleteSelectedTermType } from "@/app/ui/widgets/types";
import { LeftArrowIcon } from "@/app/ui/commons/icons";


export default function TermLookup(props: any) {

  const [selectedTerm, setSelectedTerm] = useState<AutoCompleteSelectedTermType>({});


  return (
    <div className="md:col-span-3">
      <a className="btn" href="/widgets/"><LeftArrowIcon /> Back to Lookup selection</a>
      <p className="header-1">Term Lookup</p>
      <div className="grid md:grid-cols-3 grid-rows-1 gap-10">
        <div className="md:col-span-1 overflow-hidden break-words widget-box">
          <AutoCompleteTSS setSelectedTerm={(term: AutoCompleteSelectedTermType) => { setSelectedTerm(term) }} />
        </div>
        <div className="md:col-span-2 widget-box">
          <MetadataWidgetTSS selectedTerm={selectedTerm} />
        </div>
      </div>
    </div>
  )
}
