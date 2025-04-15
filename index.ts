

export interface ImageGenerationAdapter {

  validate(): void;

  generate(
    prompt: string,
    inputFiles: string[],
  ): Promise<{
    imageURL?: string;
    error?: string;
  }>;
}
