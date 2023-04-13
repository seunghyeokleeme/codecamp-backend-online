/**
 * @swagger
 * /starbucks:
 *  get:
 *      summary: 커피 메뉴 리스트 가져오기
 *      tags: [Starbucks]
 *      responses:
 *          200:
 *              description: 커피 메뉴 리스트
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/CoffeeMenu'
 *                      example:
 *                          - name: 아메리카노
 *                            kcal: 5
 *                          - name: 라떼
 *                            kcal: 10
 *                          - name: 카푸치노
 *                            kcal: 15
 *
 *
 * components:
 *  schemas:
 *      CoffeeMenu:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            example: 아메리카노
 *          kcal:
 *            type: number
 *            example: 5
 */
