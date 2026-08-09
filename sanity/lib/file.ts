export function fileUrl(ref: string) {

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  const parts = ref.split('-');

  const id = parts[1];
  const extension = parts[parts.length - 1];

  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
}