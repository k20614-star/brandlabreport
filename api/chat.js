export default function handler(request, response) {
  // Vercel 환경 변수에 등록한 OPENAI_API_KEY를 안전하게 가져옵니다.
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return response.status(500).json({
      status: "error",
      message: "OPENAI_API_KEY가 설정되지 않았습니다. Vercel 대시보드에서 환경 변수를 등록해 주세요."
    });
  }

  // 연결 확인 성공 응답
  response.status(200).json({
    status: "success",
    message: "BrandLab API와 OPENAI_API_KEY가 안전하게 연동되었습니다.",
    timestamp: new Date().toISOString()
  });
}