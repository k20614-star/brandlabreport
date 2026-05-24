export default function handler(request, response) {
  response.status(200).json({
    status: "success",
    message: "BrandLab API가 정상적으로 연결되었습니다.",
    timestamp: new Date().toISOString()
  });
}