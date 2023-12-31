// post data fetching, markdown file로부터 metadata 추출할 떄 사용
// yarn add gray-matter, 이걸 통해 마크다운 파일을 읽어 들이고 메타데이터와 실제 마크다운 컨텐츠로 구분

import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}
console.log(getPostsFiles());

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  console.log(filePath, postSlug, fileContent);
  // 메타데이터 data 프로퍼티, 실제 콘텐츠가 있는 content property 반환
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  // post폴더에서 몇개의 마크다운 파일이 있는지 확인하여, 메타데이터 추출을 위해 모든 마크다운 파일을 찾아봄!
  // readdirSync는 모든 콘텐츠를 동기식으로 읽어 들임 블로그에 있어서 괜찮음, 블로그는 모든 게시물을 파싱하는게 우선이기 때문., 디렉토리의 전체 콘텐츠를 한방에 읽음
  const postFiles = getPostsFiles();

  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
