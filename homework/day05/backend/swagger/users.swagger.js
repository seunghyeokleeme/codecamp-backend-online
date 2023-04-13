/**
 * @swagger
 * /users:
 *  get:
 *      summary: 회원 목록 가져오기
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: 회원 목록
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 *                      example:
 *                          - email: aaa@aaa.com
 *                            name: 철수
 *                            phone: 010-1234-5678
 *                            personal: 220110-22222222
 *                            prefer:  https://naver.com
 *                          - email: Nick@aaa.com
 *                            name: Nick
 *                            phone: 010-1234-5678
 *                            personal: 220110-22222222
 *                            prefer:  https://naver.com
 *                          - email: Judy@aaa.com
 *                            name: 철수
 *                            phone: 010-1234-5678
 *                            personal: 220110-22222222
 *                            prefer:  https://naver.com
 *                          - email: Ann@aaa.com
 *                            name: 철수
 *                            phone: 010-1234-5678
 *                            personal: 220110-22222222
 *                            prefer:  https://naver.com
 *
 *
 * components:
 *  schemas:
 *      Users:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            example: aaa@aaa.com
 *          name:
 *            type: string
 *            example: 철수
 *          phone:
 *            type: string
 *            example: 010-1234-5678
 *          prefer:
 *            type: string
 *            example: https://naver.com
 */
