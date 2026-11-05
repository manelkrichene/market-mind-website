#!/usr/bin/env bash
set -euo pipefail

# Publish the exact website archive from main, then apply the cover-layout fix
# to the extracted production files (not the repository wrapper directory).
unzip -oq market-mind-website-premium-v2.zip -d .

cat >> market-mind-website/styles.css <<'CSS'

/* PLAYBOOK COVER FIX — supporting copy must never sit behind the ebook. */
.book-visual {
  min-height: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 22px 0 12px;
  overflow: visible;
}
.book-frame {
  width: min(66%, 300px);
  max-width: 300px;
  flex: 0 0 auto;
}
.book-frame img {
  display: block;
  width: 100%;
  height: auto;
}
.book-side-note {
  position: relative;
  inset: auto;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(100%, 340px);
  box-sizing: border-box;
  padding: 13px 15px;
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  background: var(--paper);
  color: var(--navy);
  font-size: 11px;
  line-height: 1.5;
}
.book-side-note .mono { color: #934B3F; }
.book-side-note span:last-child {
  max-width: 160px;
  text-align: right;
}
.book-stamp {
  left: 2%;
  top: 3%;
  z-index: 3;
  background: var(--paper);
}
@media (max-width: 760px) {
  .book-visual {
    min-height: 0;
    gap: 15px;
    padding: 16px 0 8px;
  }
  .book-frame {
    width: min(58%, 230px);
    max-width: 230px;
  }
  .book-side-note {
    width: min(100%, 320px);
    margin: 0 auto;
  }
  .book-stamp {
    left: 2%;
    top: 2%;
    width: 70px;
    height: 70px;
    font-size: 8px;
  }
}
CSS

# Fail the build if either page is missing the book annotation markup.
grep -q 'book-side-note' market-mind-website/index.html
grep -q 'book-side-note' market-mind-website/playbook/index.html
