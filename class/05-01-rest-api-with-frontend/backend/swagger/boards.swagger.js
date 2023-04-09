/**
 * @swagger
 * /boards:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [Board]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *            application/json:
 *               schema:
 *                   type: array
 *                   items:
 *                       properties:
 *                           number:
 *                               type: int
 *                               example: 3
 *                           writer:
 *                               types: string
 *                               example: 철수
 *                           title:
 *                               types: string
 *                               example: 제목입니다~~~
 *                           contents:
 *                               types: string
 *                               example: 내용입니다~~~
 */

/**
 * @swagger
 * /boards:
 *  post:
 *      summary: 게시글 등록하기
 *      tags: [Board]
 *      responses:
 *          200:
 *              description: 성공
 */
