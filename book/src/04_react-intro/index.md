# About React ⚛︎
## 📕 Preface and Resources
You can find the official documentation [here](https://react.dev/). This series of exercises is intended to be a bite-sized and practical rendition of it, but I would highly recommend having a read through of the documentation yourself and attempting any examples/exercises provided. The [odin project](https://www.theodinproject.com/paths/full-stack-javascript/courses/react) also has a great section on react for further practice.

You may also find the following resources useful:

- [Generate SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- [Adding an SSH Key to Github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

- [Jeremy’s very cool git guide](https://gist.github.com/jeremyle56/f3b664f0491d6ec0d9a03ab34780b876)

- [Nicole's git commands cheat sheet](https://docs.google.com/document/d/1KkC-NQB3OIUA3LnGJRxulVJaJXPF8smtSbw0c0Mye40/edit?usp=sharing)

- [Install nodeJs (use LTS)](https://nodejs.org/en/download)

## What is React?
React is a javascript library for building web apps and mobile applications, it essentially makes it really easy to write javascript and html together!

To be a little more specific, React is a User Interface (UI) library, which has a focal point on breaking down pages into **components**, that will react accordingly when the **state** of your application changes by re-rendering the affected components.

One of the main ideas that react uses is **declarative rendering**; meaning that opposed to extracting the exact element to edit imperatively, we just declare the outcome and let react figure out how to make the changes.


## What is actually going on

Anytime we work with javascript, there arises a problem of wanting to keep our DOM and javascript in sync. 

A naive and dumb way of ensuring this is to delete the whole DOM and re-render it entirely from scratch anytime something changes. However, it is too computationally expensive to do this since each re-render we are recalculating the positions of everything and then actually rendering the objects.

But we can make this ‘delete the whole DOM’ approach more efficient by only deleting and recreating the parts we actually need. So by keeping our own copy of the HTML hierarchy in js, we can make changes against it and use the differences to update minimal parts of the DOM. This technique is called the **virtual DOM**.

---

⚠️ Before you proceed with the exercises, make sure that you've installed [nodeJs (use LTS)](https://nodejs.org/en/download).